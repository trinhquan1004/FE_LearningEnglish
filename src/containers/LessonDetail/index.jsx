import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { CssBaseline, Button } from '@mui/material';
import { getCards, deleteCard } from '../../apis/card';
import { removeToken } from '../../utils/localStorage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardItem from './CardItem';
import CardButtons from './CardButtons';
import AddCardDialog from './AddCardDialog';
import EditCardDialog from './EditCardDialog';
import DeleteCardDialog from './DeleteCardDialog';
import {
  StyledGrid,
  StyledBox,
  StyledStack,
  StyledTypography,
} from './index.style';

const LessonDetail = ({ lessonId }) => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

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

  const handleOpenCreate = () => setOpenCreate(true);

  const handleCloseCreate = () => setOpenCreate(false);

  const handleOpenEdit = (card) => {
    setSelectedCard(card);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setSelectedCard(null);
    setOpenEdit(false);
  };

  const handleOpenDelete = (card) => {
    setSelectedCard(card);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setSelectedCard(null);
    setOpenDelete(false);
  };

  const handleDelete = async () => {
    const response = await deleteCard(selectedCard.id);
    if (response.status === 0) {
      enqueueSnackbar(response.message, { variant: 'error' });
    }
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    fetchCards(lessonId);
    handleCloseDelete();
  };

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
          <Button variant="contained" onClick={handleOpenCreate}>
            Create Card
          </Button>
        </StyledStack>
      </StyledBox>
      <StyledGrid>
        {cards[currentIndex] && (
          <CardItem
            card={cards[currentIndex]}
            key={cards[currentIndex].id}
            onEditCard={handleOpenEdit}
            onDeleteCard={handleOpenDelete}
          />
        )}
      </StyledGrid>
      <CardButtons
        onPrevCard={handlePrevCard}
        onNextCard={handleNextCard}
        onReturn={handleReturn}
        currentIndex={currentIndex}
      />
      <AddCardDialog
        open={openCreate}
        onClose={handleCloseCreate}
        lessonId={lessonId}
        fetchCards={fetchCards}
      />
      <EditCardDialog
        open={openEdit}
        onClose={handleCloseEdit}
        selectedCard={selectedCard}
        lessonId={lessonId}
        fetchCards={fetchCards}
      />

      <DeleteCardDialog
        open={openDelete}
        onClose={handleCloseDelete}
        selectedCard={selectedCard}
        onDelete={handleDelete}
      />
      <Footer />
    </>
  );
};

export default LessonDetail;
