import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedEvents extends Schema.Component {
  collectionName: 'components_shared_events';
  info: {
    displayName: 'Events';
    icon: 'bell';
  };
  attributes: {
    title: Attribute.String;
    articles: Attribute.Relation<
      'shared.events',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface SharedHero extends Schema.Component {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
    icon: 'alien';
  };
  attributes: {
    hero_image: Attribute.Media;
  };
}

export interface SharedImageText extends Schema.Component {
  collectionName: 'components_shared_image_texts';
  info: {
    displayName: 'ImageText';
    icon: 'archive';
  };
  attributes: {
    title: Attribute.Text;
    text: Attribute.Blocks;
    image: Attribute.Media;
  };
}

export interface SharedIntroduction extends Schema.Component {
  collectionName: 'components_shared_introductions';
  info: {
    displayName: 'Introduction';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    introduction: Attribute.Blocks;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedPostsGrid extends Schema.Component {
  collectionName: 'components_shared_posts_grids';
  info: {
    displayName: 'Posts Grid';
    icon: 'arrowDown';
  };
  attributes: {
    articles: Attribute.Relation<
      'shared.posts-grid',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.events': SharedEvents;
      'shared.hero': SharedHero;
      'shared.image-text': SharedImageText;
      'shared.introduction': SharedIntroduction;
      'shared.media': SharedMedia;
      'shared.posts-grid': SharedPostsGrid;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
