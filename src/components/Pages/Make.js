
import _ from 'lodash';
import React from 'react';
import Container from '../../components/Pages/Container';
import Thumbnails from '../../components/Thumbnails';
import Header from '../../components/Header';

export default class Make extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    items: React.PropTypes.array.isRequired
  };
  static defaultProps = {
    title: 'make'
  };
  render = () => {
    let headerProps = this.getHeaderProps(this.props.title, this.props.items);
    let thumbnailsProps = this.getThumbnailsProps(this.props.items);
    return (
      <Container title={this.props.title}>
        <Header {...headerProps} />
        <Thumbnails {...thumbnailsProps} />
      </Container>
    );
  };
  getHeaderProps = (title, works) => {
    let navigations = _.map(works, work => {
      return { name: work.model, uri: `models/${work.model}.html` };
    });
    navigations.unshift({ name: 'index page', uri: '/' });
    return { title, navigations };
  };
  getThumbnailsProps = (works) => {
    return {
      items: _.map(works, work => {
        return { imageUrl: work.imageUrl };
      })
    };
  };
}
