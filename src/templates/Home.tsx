import Slider, { Settings } from "react-slick";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { MovieCard } from "../components/MovieCard";
import { HomeProps } from "../pages/HomePage";

const Home = ({ results }: HomeProps) => {
  type SliderSettings = Settings;

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 10000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Header />
      <Container>
        <h1 className="text-3xl font-bold mb-8">Popular movies</h1>
        <Slider {...settings}>
          {results.map((item) => (
            <MovieCard
              key={item.id}
              title={item.title}
              rating={item.vote_average}
              url={item.poster_path}
              id={item.id}
            />
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default Home;
