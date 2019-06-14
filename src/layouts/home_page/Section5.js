import React, { Component } from "react";
import Art1 from "./articles/Art1.js";
import Art2 from "./articles/Art2.js";
import Art3 from "./articles/Art3.js";
import Art4 from "./articles/Art4.js";
import Art5 from "./articles/Art5.js";
import Art6 from "./articles/Art6.js";
import Square from "./articles/Square";

class Section5 extends Component {
  state = {
    isDown: false,
    scrollLeft: 0,
    startX: null,
    size: 0,
    flaga: true,
    number: 1,
    arrArt: [
      {
        id: 0,
        name: Art1,
        active: true
      },
      {
        id: 1,
        name: Art2,
        active: false
      },
      {
        id: 2,
        name: Art3,
        active: false
      },
      {
        id: 3,
        name: Art4,
        active: false
      },
      {
        id: 4,
        name: Art5,
        active: false
      },
      {
        id: 5,
        name: Art6,
        active: false
      }
    ]
  };

  handleMouseDown = e => {
    clearInterval(this.indexInterval);
    const startX = e.pageX;
    this.setState({
      startX: startX - this.state.scrollLeft,
      isDown: true
    });
  };

  handleMouseMove = e => {
    const inner = window.innerWidth;
    const innerX = ((inner / 2) * 100) / (inner + 110);
    e.preventDefault();
    if (this.state.isDown) {
      let touch = e.pageX;
      let scrollLeft = this.state.startX - touch;
      // let touch = e.touches[0];
      // let scrollLeft = this.state.startX - touch.pageX;
      if (scrollLeft < 0) {
        return;
      }
      if (scrollLeft < 10 && scrollLeft > 0) {
        this.setState({
          scrollLeft: 0,
          number: 0
        });
      }
      if (scrollLeft > 10 && scrollLeft < innerX) {
        this.setState({
          scrollLeft: 100,
          number: 1
        });
      }
      if (scrollLeft > 110 && scrollLeft < innerX * 2) {
        this.setState({
          scrollLeft: 200,
          number: 2
        });
      }
      if (scrollLeft > 210 && scrollLeft < innerX * 3) {
        this.setState({
          scrollLeft: 300,
          number: 3
        });
      }
      if (scrollLeft > 310 && scrollLeft < innerX * 4) {
        this.setState({
          scrollLeft: 400,
          number: 4
        });
      }
      if (scrollLeft > innerX * 5) {
        this.setState({
          scrollLeft: 500,
          number: 5
        });
      }
      this.setState({
        scrollLeft: "-" + scrollLeft.toFixed()
      });
      this.changeSquare();
    }
  };

  handleMouseUp = () => {
    const inner = window.innerWidth;
    const innerX = ((inner / 2) * 100) / (inner + 110);
    if (this.state.scrollLeft > -10) {
      this.setState({
        scrollLeft: 0
      });
    }
    if (this.state.scrollLeft < -10) {
      this.setState({
        scrollLeft: -innerX,
        number: 1
      });
    }
    if (this.state.scrollLeft < -(innerX * 2 + 10)) {
      this.setState({
        scrollLeft: -(innerX * 2),
        number: 2
      });
    }
    if (this.state.scrollLeft < -(innerX * 3 + 10)) {
      this.setState({
        scrollLeft: -(innerX * 3),
        number: 3
      });
    }
    if (this.state.scrollLeft < -(innerX * 4 + 10)) {
      this.setState({
        scrollLeft: -(innerX * 4),
        number: 4
      });
    }
    if (this.state.scrollLeft < -(innerX * 5 + 10)) {
      this.setState({
        scrollLeft: -(innerX * 5),
        number: 5
      });
    }
    this.setState({
      isDown: false
    });
  };

  handleTouchStart = e => {
    clearInterval(this.indexInterval);
    const startX = e.touches[0].pageX;
    this.setState({
      startX: startX - this.state.scrollLeft
    });
  };

  handleTouchMove = e => {
    let touch = e.touches[0];
    let scrollLeft = this.state.startX - touch.pageX;
    if (scrollLeft < 0) {
      return;
    }
    if (scrollLeft < 10 && scrollLeft > 0) {
      this.setState({
        scrollLeft: 0,
        number: 0
      });
    }
    if (scrollLeft > 10 && scrollLeft < 110) {
      this.setState({
        scrollLeft: 100,
        number: 1
      });
    }
    if (scrollLeft > 110 && scrollLeft < 210) {
      this.setState({
        scrollLeft: 200,
        number: 2
      });
    }
    if (scrollLeft > 210 && scrollLeft < 310) {
      this.setState({
        scrollLeft: 300,
        number: 3
      });
    }
    if (scrollLeft > 310 && scrollLeft < 410) {
      this.setState({
        scrollLeft: 400,
        number: 4
      });
    }
    if (scrollLeft > 410) {
      this.setState({
        scrollLeft: 500,
        number: 5
      });
    }
    this.changeSquare();
    this.setState({
      scrollLeft: "-" + scrollLeft.toFixed()
    });
  };

  handleTouchEnd = () => {
    if (this.state.scrollLeft > -10) {
      this.setState({
        scrollLeft: 0,
        active: true
      });
    }
    if (this.state.scrollLeft < -10) {
      this.setState({
        scrollLeft: -100,
        active: true
      });
    }
    if (this.state.scrollLeft < -110) {
      this.setState({
        scrollLeft: -200,
        active: true
      });
    }
    if (this.state.scrollLeft < -210) {
      this.setState({
        scrollLeft: -300,
        active: true
      });
    }
    if (this.state.scrollLeft < -310) {
      this.setState({
        scrollLeft: -400,
        active: true
      });
    }
    if (this.state.scrollLeft < -410) {
      this.setState({
        scrollLeft: -500,
        active: true
      });
    }
  };

  changeSquare = () => {
    const activeSquare = this.state.arrArt.findIndex(
      square => square.active === true
    );
    const arrArt = this.state.arrArt;
    arrArt.map(item => {
      if (item.active === true) {
        arrArt[activeSquare].active = false;
      }
      return item;
    });
    this.setState({
      arrArt
    });
    const x = this.state.arrArt;
    x.map(item => {
      if (item.active === false) {
        x[this.state.number].active = true;
      }
      return item;
    });
    this.setState({
      arrArt: x
    });
  };

  componentDidMount() {
    const inner = window.innerWidth;
    const innerX = ((inner / 2) * 100) / (inner + 110);
    this.indexInterval = setInterval(() => {
      if (inner < 1023) {
        this.setState(prevState => ({
          scrollLeft: prevState.scrollLeft - 100
        }));
        if (this.state.scrollLeft === -600) {
          this.setState({
            scrollLeft: 0
          });
        }
      } else {
        this.setState(prevState => ({
          scrollLeft: prevState.scrollLeft - innerX
        }));
        if (this.state.number === 0) {
          this.setState({
            scrollLeft: 0
          });
        }
      }
      this.changeSquare();
      this.setState(prevState => ({
        number: prevState.number + 1
      }));
      if (this.state.number === 6) {
        this.setState({
          number: 0
        });
      }
    }, 2000);
  }

  handleClick = id => {
    const inner = window.innerWidth;
    const innerX = ((inner / 2) * 100) / (inner + 110);
    if (inner < 1025) {
      if (id === 0) {
        this.setState({
          scrollLeft: 0,
          number: id
        });
      }
      if (id === 1) {
        this.setState({
          scrollLeft: -100,
          number: id
        });
      }
      if (id === 2) {
        this.setState({
          scrollLeft: -200,
          number: id
        });
      }
      if (id === 3) {
        this.setState({
          scrollLeft: -300,
          number: id
        });
      }
      if (id === 4) {
        this.setState({
          scrollLeft: -400,
          number: id
        });
      }
      if (id === 5) {
        this.setState({
          scrollLeft: -500,
          number: id
        });
      }
    } else {
      if (id === 0) {
        this.setState({
          scrollLeft: 0,
          number: id
        });
      }
      if (id === 1) {
        this.setState({
          scrollLeft: -innerX,
          number: id
        });
      }
      if (id === 2) {
        this.setState({
          scrollLeft: -(innerX * 2),
          number: id
        });
      }
      if (id === 3) {
        this.setState({
          scrollLeft: -(innerX * 3),
          number: id
        });
      }
      if (id === 4) {
        this.setState({
          scrollLeft: -(innerX * 4),
          number: id
        });
      }
      if (id === 5) {
        this.setState({
          scrollLeft: -(innerX * 5),
          number: id
        });
      }
    }
    this.changeSquareClick(id);
  };
  changeSquareClick = id => {
    clearInterval(this.indexInterval);
    const activeSquare = this.state.arrArt.findIndex(
      square => square.active === true
    );
    const arrArt = this.state.arrArt;
    arrArt.map(item => {
      if (item.active === true) {
        arrArt[activeSquare].active = false;
      }
      return item;
    });
    this.setState({
      arrArt
    });
    const x = this.state.arrArt;
    x.map(item => {
      if (item.active === false) {
        x[id].active = true;
      }
      return item;
    });
    this.setState({
      arrArt: x
    });
  };

  render() {
    const arrList = this.state.arrArt.map((item, index) => (
      <item.name key={index} scrollLeft={`${this.state.scrollLeft}vw`} />
    ));
    const squares = this.state.arrArt.map(item => (
      <Square
        key={item.id}
        active={item.active}
        click={() => this.handleClick(item.id)}
      />
    ));
    return (
      <>
        <article className="section5">
          <h3>Våre kunder forteller</h3>
          <div
            className="client"
            onMouseDown={this.handleMouseDown}
            onMouseLeave={this.handleMouseLeave}
            onMouseUp={this.handleMouseUp}
            onMouseMove={this.handleMouseMove}
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEndCapture={this.handleTouchEnd}
          >
            <div className="tak">{arrList}</div>
          </div>
          <div className="squares">{squares}</div>
        </article>
      </>
    );
  }
}

export default Section5;
