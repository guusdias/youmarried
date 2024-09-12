import styled from "styled-components";

export const TaskListTitle = styled.h2`
  color: #000;
`;

export const TaskListContainer = styled.div`
  padding: 5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

export const TaskListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid rgb(214, 214, 214);
  width: 100%;
`;

export const TaskItem = styled.li`
  list-style: none;
  padding: 1rem;
  border-bottom: 1px solid rgb(214, 214, 214);
  color: #000;

  &:last-child {
    border-bottom: none;
  }
`;
