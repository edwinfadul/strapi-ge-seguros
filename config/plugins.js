module.exports = async ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: env("IMAGE_REPO_KEY", "DO00Z274FZA4GGWFEVDQ"),
        secret: env(
          "IMAGE_REPO_SECRET",
          "Y40md/p5v9LRPQ8oGidjo7Q96JWx4mCUABoOgqBZocU"
        ),
        endpoint: env("IMAGE_REPO_ENDPOINT", "nyc3.digitaloceanspaces.com"),
        space: env("IMAGE_REPO_SPACE", "pegaso"),
        directory: env("IMAGE_REPO_DIRECTORY", "geseguros_dev"),
        cdn: env("IMAGE_REPO_CDN", "pegaso.nyc3.cdn.digitaloceanspaces.com"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  transformer: {
    enabled: true,
    config: {
      prefix: "/api/",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
});
