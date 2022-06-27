```javascript
import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";

const Todos = () => {
  const queryClient = useQueryClient();
  const [todo, setTodo] = useState("");

  const queryFetcher = async () => {
    const data = await axios.get("http://localhost:3001/posts");
    return data.data;
  };

  const { data, isLoading, error } = useQuery("상기의Todo요청", queryFetcher);

  const fetcher = async (newTodo) => {
    await axios.post("http://localhost:3001/posts", newTodo);
  };

  const { mutate } = useMutation(fetcher, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onClick = (e) => {
    e.preventDefault();
    mutate({
      title: todo,
    });
  };

  if (isLoading) return <div>로딩중........</div>;
  return (
    <>
      <form onSubmit={onClick}>
        <input
          type="text"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button>전송</button>
      </form>
      <Container>
        {data?.map((v) => (
          <Item key={v.id}>{v.title}</Item>
        ))}
      </Container>
    </>
  );
};

export default Todos;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 500px;
  margin: 0 auto;
  padding: 100px;
`;

const Item = styled.div`
  border: 1px solid red;
  width: 100px;
  height: 100px;
  overflow: hidden;
`;
```
