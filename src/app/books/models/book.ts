export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}

export function generateMockBook(): Book {
  return {
    id: '1',
    volumeInfo: {
      title: 'title',
      subtitle: 'subtitle',
      authors: ['author'],
      publisher: 'publisher',
      publishDate: '',
      description: 'description',
      averageRating: 3,
      ratingsCount: 5,
      imageLinks: {
        thumbnail: 'string',
        smallThumbnail: 'string',
      },
    },
  };
}

export function generateEmptyMockBook(): Book {
  return {
    id: '',
    volumeInfo: {
      title: '',
      subtitle: '',
      authors: [],
      publisher: '',
      publishDate: '',
      description: '',
      averageRating: 0,
      ratingsCount: 0,
      imageLinks: {
        thumbnail: '',
        smallThumbnail: '',
      },
    },
  };
}

export interface VolumeInfo {
  title:         string;
  subtitle:      string;
  authors:       string[];
  publisher:     string;
  publishDate:   string;
  description:   string;
  averageRating: number;
  ratingsCount:  number;
  imageLinks:    ImageLinks;
}

export interface ImageLinks {
  thumbnail:      string;
  smallThumbnail: string;
}
