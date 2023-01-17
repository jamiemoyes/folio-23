import { Mocked, SpyInstance, describe, expect, it, vi } from 'vitest';
import { useProjects } from './useProjects';
import { request } from 'graphql-request';

const createRequestResponse = (data: Object) => Promise.resolve({ data });

vi.mock('react-query', () => ({
  useQuery: vi.fn().mockImplementation(({ queryFn }) => queryFn())
}));

vi.mock('graphql-request', async (importOriginal) => {
  const mod = await importOriginal<any>();
  return {
    ...mod,
    request: vi.fn()
  };
});

describe('useProjects', () => {
  it('useProjects return correct response', async () => {
    (request as Mocked<any>).mockReturnValue(createRequestResponse(['res1', 'res2']));
    const response = useProjects();
    expect(request).toHaveBeenCalledWith(
      'https://graphql.contentful.com/content/v1/spaces/MOCK_SPACE_ID/',
      `
  {
    folioCollection {
      items {
        title
        subtitle
        startDate
        endDate
        description {
          json
        }
      }
    }
  }
`,
      {},
      { Authorization: 'Bearer MOCK_APP_TOKEN', 'Content-Type': 'application/json' }
    );

    expect(await response).toEqual({ data: ['res1', 'res2'] });
  });
});
