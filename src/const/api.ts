export const API = {
  BLOG: {
    END_POINT: 'blogs',
    QUERY: { limit: 10 },
  },
  CATEGORY: {
    END_POINT: 'categories',
    QUERY: { limit: 10 },
  },
  TAG: {
    END_POINT: 'tags',
    QUERY: { limit: 10 },
  },
} as const
