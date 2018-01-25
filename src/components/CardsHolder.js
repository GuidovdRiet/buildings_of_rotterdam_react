import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import { Link } from 'react-router-dom';

import BuildingCard from "./BuildingCard";

const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: -40px;
`;

const CardsWrapper = styled.div`
  width: 90%;
  max-width: 1130px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
`;

const Pagination = styled.div``;
const Previous = styled.button``;
const Next = styled.button``;

class CardsHolder extends Component {
  constructor() {
    super();
    this.renderBuildings = this.renderBuildings.bind(this);

    this.state = {
      buildings: [],
      pagination: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        'http://localhost:8000/api/buildings?start=1&limit=6'
      )
      .then(({ data }) => {
        this.setState({ buildings: data.items });
        this.setState({ pagination: data.pagination });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderBuildings() {
    return this.state.buildings.map(building => (
      <BuildingCard key={building.id} building={building} />
    ));
  }

  paginationNext(e) {
    console.log(this.state.pagination);
    axios
      .get(
        this.state.pagination._links.next.href
      )
      .then(({ data }) => {
        this.setState({ buildings: data.items });
      })
      .catch(err => {
        console.log(err);
      });
  }

  paginationPrevious(e) {
    axios
      .get(
        this.state.pagination._links.previous.href
      )
      .then(({ data }) => {
        this.setState({ buildings: data.items });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.pagination);
    return (
      <ContentWrapper>
        <CardsWrapper>{this.renderBuildings()}</CardsWrapper>
        <Pagination>
          <Previous onClick={e => this.paginationPrevious(e)}>
            Previous
          </Previous>
          <Next onClick={e => this.paginationNext(e)}>
            Next
          </Next>
        </Pagination>
      </ContentWrapper>
    );
  }
}

export default CardsHolder;
