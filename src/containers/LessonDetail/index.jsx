import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CssBaseline, Button } from '@mui/material';
import { getCards } from '../../apis/card';
import { removeToken } from '../../utils/localStorage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardItem from './CardItem';
import CardButtons from './CardButtons';
import {
  StyledGrid,
  StyledBox,
  StyledStack,
  StyledTypography,
} from './index.style';

const LessonDetail = ({ lessonId }) => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const handleReturn = () => navigate('/lesson');

  const fetchCards = async () => {
    const response = await getCards(lessonId);
    if (response.status === 0) {
      return;
    }
    const cardsArray = response.result.cards;
    setCards(cardsArray);
  };

  const handleLogout = () => removeToken();

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevCard = () => setCurrentIndex((prevIndex) => prevIndex - 1);

  useEffect(() => {
    fetchCards(lessonId);
  }, []);

  return (
    <>
      <CssBaseline />
      <Header handleLogout={handleLogout} />
      <StyledBox>
        <StyledTypography className="titleTypo">
          Welcome to the cards!
        </StyledTypography>
        <StyledStack className="customStack">
          <Button variant="contained">Create Card</Button>
        </StyledStack>
      </StyledBox>
      <StyledGrid>
        {cards[currentIndex] && (
          <CardItem card={cards[currentIndex]} key={cards[currentIndex].id} />
        )}
      </StyledGrid>
      <CardButtons
        onPrevCard={handlePrevCard}
        onNextCard={handleNextCard}
        onReturn={handleReturn}
        currentIndex={currentIndex}
      />
      <Footer />
    </>
  );
};

export default LessonDetail;
