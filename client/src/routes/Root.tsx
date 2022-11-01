import { Grid, Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Rooms } from "../apps/Rooms/Rooms";

type Props = {};

const Item = styled(Paper)``;

export const Root = (props: Props) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>xs=12</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <Rooms />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
      <div id='sidebar'>
        <h1>React Router Contacts</h1>
        <div>
          <form id='search-form' role='search'>
            <input
              id='q'
              aria-label='Search contacts'
              placeholder='Search'
              type='search'
              name='q'
            />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </form>
          <form method='post'>
            <button type='submit'>New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id='detail'></div>
    </>
  );
};
