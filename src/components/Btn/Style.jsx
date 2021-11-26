import styled from 'styled-components';

export const Button = styled.button`
  height: 150px;
  width: 150px;
  background: none;
  border: none;
  padding-left: 60px;
`;

export const Img = styled.img`
  height: 150px;
  width: 150px;
  :hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }

      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }

      30%,
      50%,
      70% {
        transform: translate3d(-4px, 0, 0);
      }

      40%,
      60% {
        transform: translate3d(4px, 0, 0);
      }
    }
  }
`;

export const Tooltip = styled.div`
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  margin-left: 190px;
  padding-left: 20px;
  margin-bottom: 260px;
  z-index: 17;
  bottom: 480px;
  width: 150px;
  height: 60px;
  color: #000000;
  background: #ffc700;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    content: '';
    position: absolute;
    right: 100%;
    top: 10px;
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-right: 29px solid #ffc700;
    border-bottom: 9px solid transparent;
  }
`;
