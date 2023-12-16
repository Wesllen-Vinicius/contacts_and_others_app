import styled, { css } from "styled-components";

export const Button = styled.button<{
  $linked?: boolean;
  $github?: boolean;
  $readcv?: boolean;
  $telegram?: boolean;
  $lattes?: boolean;
}>`
  display: inline-block;
  text-decoration: none;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  font-size: 18px;
  width: 300px;
  font-weight: 700;
  padding: 14px 12px 12px 12px;
  letter-spacing: 0.1px;
  white-space: wrap;
  outline: none;
  border-radius: 8px;

  &:hover {
    color: #fff;
    filter: brightness(90%);
    cursor: pointer;
  }

  ${(props) =>
    props.$linked &&
    css`
      color: #ffffff;
      background-color: #2867b2;
    `};

  ${(props) =>
    props.$github &&
    css`
      color: #ffffff;
      background-color: #000000;
      border: 1px solid #ffffff;
    `};

  ${(props) =>
    props.$readcv &&
    css`
      color: #ffffff;
      background-color: #000000;
      border: 1px solid #ffffff;
    `};

  ${(props) =>
    props.$telegram &&
    css`
      color: #ffffff;
      background-color: #3faee8;
    `};

  ${(props) =>
    props.$lattes &&
    css`
      color: #ffffff;
      background-color: #8faee1;
    `};
`;
