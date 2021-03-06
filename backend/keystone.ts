/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from '@keystone-6/core';
// from apollo docs as well
// import {
//   ApolloServerPluginLandingPageGraphQLPlayground,
//   ApolloServerPluginLandingPageDisabled,
// } from 'apollo-server-core';

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from './schema';

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from './auth';

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    db: {
      provider: 'sqlite',
      url: 'file:./keystone.db',
    },
    // added for graphql/apollo playground. copied from docs: https://www.apollographql.com/docs/apollo-server/migration/#graphql-playground
    // graphql: {
    //   apolloConfig: {
    //     plugins: [
    //       process.env.NODE_ENV === 'production'
    //         ? ApolloServerPluginLandingPageDisabled()
    //         : ApolloServerPluginLandingPageGraphQLPlayground(),
    //     ],
    //   },
    // },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => {
        return !!context.session?.data.isAdmin;
      },
    },
    lists,
    session,
    // Reference: https://keystonejs.com/releases/2021-11-02#cors-configuration
    server: {
      cors: {
        origin: ['http://localhost:5000', 'http://studio.apollographql.com'],
        credentials: true,
      },
    },
  }),
);
