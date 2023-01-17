import { request, gql } from 'graphql-request';
import { useQuery } from 'react-query';
import React from 'react';
const GET_PROJECTS_QUERY = gql`
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
`;

const useProjects = () => {
  const res = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await request(
        `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_SPACE_ID}/`,
        GET_PROJECTS_QUERY,
        {},
        {
          'Content-Type': 'application/json',
          // Authenticate the request
          Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`
        }
      );
      return res;
    }
  });

  return res;
};

export { useProjects };
