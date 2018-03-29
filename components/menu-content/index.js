import React, { Component } from "react";
import { Container, Header } from "./styles";
import { MenuItem, Bold } from "./styles";
// import { Page } from "../../global";

class MenuPage extends Component {
  constructor () {
    super();
    this.state = {
      menuItems: []
    }
  }
  
  async componentDidMount() {
    const res = await fetch("http://127.0.0.1:10010/menu");
    const menu = await res.json();
    this.setState({ menuItems: menu.menuItems });
  }
  
  render() {
    return (
      <div>
        <Container>
            <Header>Imposter Cafe Brunch Menu</Header>
            { this.state.menuItems.map((menuItem) => {
              const { name, description, cost } = menuItem;
              return (
                <MenuItem>
                  <Bold>{name}:</Bold> {description}
                  <p>Price: {cost}</p>
                </MenuItem>
              )
            }) }
        </Container>
      </div>
    );
  }
}

export default MenuPage;