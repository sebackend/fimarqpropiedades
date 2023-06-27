import ImageGallery from "react-image-gallery";

export default function PropertyGallery({ photos }) {
  return (
    <>
      <div className="col-md-6 col-12">
        <ImageGallery
          items={photos}
          showPlayButton={false}
          thumbnailPosition="left"
        />
      </div>
    </>
  );
}
