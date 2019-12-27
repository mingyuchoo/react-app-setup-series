import React, { ReactElement } from 'react';
import Layout from '../../components/Layout';
import Artist from '../../components/Artist';
import withLocale from '../../hocs/withLocale';

const ArtistPage: React.FC = (): ReactElement => {
  return (
    <Layout titleKey="about">
      <Artist />
    </Layout>
  );
};

export default withLocale(ArtistPage);
