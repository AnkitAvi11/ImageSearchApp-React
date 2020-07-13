import React from 'react';


class ImageList extends React.Component {
    render() {

        const images = this.props.images.map((image, index) => {
            return (
                <img src={image.urls.regular} style={{width:"300px",display:"inline"}}/>
            )
        })

        return (
            <div>
                We have found {this.props.images.length} images for you
                <div className="ui small images">
                    {images}
                </div>
            </div>
        )
    }
}

export default ImageList;