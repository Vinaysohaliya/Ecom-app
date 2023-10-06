import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <Image src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ5T6z0HKJtqaE1o1FXRZh3cyY0P2gN1qtLShQqtWmiXyezI8SVrfB05Zs5a9oMOi58WABFhjEmonuenKLkM7sSosPfXfl995kT0bAQYo8T8CVhIDjxXxho&usqp=CAc" alt="Product 1" />
        <p className="legend">Product 1</p>
      </div>
      <div>
        <Image  src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest6.jpg" alt="Product 2" />
        <p className="legend">Product 2</p>
      </div>
      <div>
        <Image  src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest6.jpg" alt="Product 3" />
        <p className="legend">Product 3</p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
