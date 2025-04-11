import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    background-color: #c4b6b6;
    width: 100%;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`;

export const WtfWrapper = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: white;
  color: #ffffff30; /* Початковий колір тексту */
  border: 2px solid #ffffff30; /* Додано обвідку з кольором тексту */
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease; /* Плавний перехід для ефектів */

  &:hover {
    background-color: #ffffff30; /* При наведенні фон стає кольору тексту */
    color: white; /* Текст стає білим */
    border-color: white; /* Обвідка також стає білою */
  }
`;

export const PlusIcon = styled.span`
  margin-right: 10px;
  font-size: 40px;
  display: flex;
  align-items: center;
`;



export const ButtonContent = styled.span`
    font-size: 16px;
`;