import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { webformatURL, largeImageURL, id, tags } = this.props;
    const children = {
      toggleModal: this.toggleModal,
      largeImageURL,
      tags,
    };

    return (
      <>
        <li key={id} className={s.ImageGalleryItem} onClick={this.toggleModal}>
          <img
            className={s.ImageGalleryItemImage}
            src={webformatURL}
            alt={tags}
          />
        </li>

        {showModal && <Modal onClose={this.toggleModal}>{children}</Modal>}
      </>
    );
  }
}
export default ImageGalleryItem;
