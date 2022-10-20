import { useEffect, useState } from "react"
import { BiArrowFromLeft, BiArrowToRight } from "react-icons/bi"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import { Container } from "../components/Container"
import { Header } from "../components/Header"
import { MovieCard } from "../components/MovieCard"
import { SliderSettings } from "../components/Slider"
import { HomeProps, MovieApiData } from "../pages/HomePage"
import { api, apiKey } from "../services/api"


const Home = ({results}: HomeProps) =>  {

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 10000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1
        }
      }
    ],
  };
    return (
    <>
      <Header />
      <Container >
        <h1 className="text-3xl font-bold mb-8">Filmes populares</h1>
        <Slider {...settings}>
        {results && 
          results.map((item) => <MovieCard
           key={item.id}
           title={item.title} 
           rating={item.vote_average} 
           url={item.poster_path}
           id={item.id}
           />)}
        </Slider>
        
      </Container>
    </>
  )}

export default Home