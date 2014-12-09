var React = require('react'),
    Row = require('../../src/Row'),
    Col = require('../../src/Col'),
    Button = require('../../src/Button'),
    Icon = require('../../src/Icon'),
    Navbar = require('../../src/Navbar'),
    NavItem = require('../../src/NavItem'),
    Card = require('../../src/Card'),
    CardTitle = require('../../src/CardTitle'),
    Preloader = require('../../src/Preloader'),
    Collection = require('../../src/Collection'),
    CollectionItem = require('../../src/CollectionItem'),
    Collapsible = require('../../src/Collapsible'),
    CollapsibleItem = require('../../src/CollapsibleItem'),
    Toast = require('../../src/Toast'),
    Modal = require('../../src/Modal'),
    ModalTrigger = require('../../src/ModalTrigger');

var ComponentsPage = React.createClass({
  render() {
    return (
      <Row>
        <Col m={9}>
          <h2 className='header'>Button</h2>
          <p className='caption'>
            There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.
          </p>
          <div id='raised' className='section'>
            <h4 className='col s12'>
              Raised
            </h4>
            <Col s={12}>
              <Button waves='light'>button</Button>
              <Button waves='light'><Icon mdi='file-cloud' placement='left'/>button</Button>
              <Button waves='light'><Icon mdi='file-cloud' placement='right'/>button</Button>
            </Col>
            <h4 className='col s12'>
              Floating
            </h4>
            <Col s={12}>
              <Button floating><Icon mdi='content-add'/></Button>
            </Col>
            <h4 className='col s12'>
              Flat
            </h4>
            <Col s={12}>
              <Button flat waves='effect'>Button</Button>
            </Col>
            <h4 className='col s12'>
              Submit Button
            </h4>
            <Col s={12}>
              <Button type='submit' waves='light'><Icon mdi='content-send' placement='right'/>Submit</Button>
            </Col>
            <h3 className='header'>Additional Style</h3>
            <h4 className='col s12'>
              Large
            </h4>
            <Col s={12}>
              <Button waves='light' large>Button</Button>
              <Button waves='light' large><Icon mdi='file-cloud' placement='left'/>Button</Button>
              <Button waves='light' large><Icon mdi='file-cloud' placement='right'/>Button</Button>
            </Col>
            <h4 className='col s12'>
              Disabled
            </h4>
            <Col s={12}>
              <Button large disabled>Button</Button>
              <Button disabled>Button</Button>
              <Button flat disabled>Button</Button>
              <Button floating disabled><Icon mdi='content-add'/></Button>
            </Col>
            <h2 className='header'>
              Navbar
            </h2>
            <h4 className='col s12'>
              Right Aligned Links
            </h4>
            <Col s={12}>
              <Navbar brand='logo'>
                <NavItem href='get-started.html'>Getting started</NavItem>
                <NavItem href='components.html'>Components</NavItem>
              </Navbar>
            </Col>
            <h4 className='col s12'>
              Left Aligned Links
            </h4>
            <Col s={12}>
              <Navbar brand='logo' left>
                <NavItem href='get-started.html'>Getting started</NavItem>
                <NavItem href='components.html'>Components</NavItem>
              </Navbar>
            </Col>
            <h4 className='col s12'>
              Icon Links
            </h4>
            <Col s={12}>
              <Navbar brand='logo'>
                <NavItem href='get-started.html'><Icon mdi='action-search'/></NavItem>
                <NavItem href='get-started.html'><Icon mdi='action-view-module'/></NavItem>
                <NavItem href='get-started.html'><Icon mdi='navigation-refresh'/></NavItem>
                <NavItem href='get-started.html'><Icon mdi='navigation-more-vert'/></NavItem>
              </Navbar>
            </Col>
            <h2 className='header'>
              Cards
            </h2>
            <Col s={12} m={6}>
              <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
                I am a very simple card.
              </Card>
            </Col>
            <Col s={12} m={6}>
              <Card className='small'
                header={<CardTitle image='assets/sample-1.jpg'>Card Title</CardTitle>}
                actions={[<a href='#'>This is a Link</a>]}>
                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
              </Card>
            </Col>
            <Col s={12}>
              <Card className='small'
                header={<CardTitle image='assets/sample-1.jpg'>Card Title</CardTitle>}
                actions={[<a href='#'>This is a Link</a>]}>;
                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
              </Card>
            </Col>
            <h2 className='header'>
              Preloader
            </h2>
            <Col s={4}>
              <Preloader size='big'/>
            </Col>
            <Col s={4}>
              <Preloader />
            </Col>
            <Col s={4}>
              <Preloader size='small'/>
            </Col>
            <h2 className='header'>
              Collections
            </h2>
            <h4 className='col s12'>
              Basic
            </h4>
            <Col s={12}>
              <Collection>
                <CollectionItem>Alvin</CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
              </Collection>
            </Col>
            <h4 className='col s12'>
              Basic with different HTML structure
            </h4>
            <Col s={12}>
              <Collection>
                <CollectionItem href='#'>Alvin</CollectionItem>
                <CollectionItem href='#' active>Alvin</CollectionItem>
                <CollectionItem href='#'>Alvin</CollectionItem>
                <CollectionItem href='#'>Alvin</CollectionItem>
              </Collection>
            </Col>
            <h4 className='col s12'>
              Collection with header
            </h4>
            <Col s={12}>
              <Collection header='First Names'>
                <CollectionItem>Alvin</CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
              </Collection>
            </Col>
            <h4 className='col s12'>
              Toast
            </h4>
            <Col s={12}>
              <Toast>hello</Toast>
            </Col>
            <h4 className='col s12'>
              Modal
            </h4>
            <Col s={12}>
              <ModalTrigger modal={
                <Modal header='Modal Header'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Modal>
              }>
                <Button waves='light'>Modal</Button>
              </ModalTrigger>
            </Col>
            <h4 className='col s12'>
              Collapsible
            </h4>
            <Col s={12}>
              <Collapsible>
                <CollapsibleItem header='First' mdi='image-filter-drama'>
                  Lorem ipsum dolor sit amet.
                </CollapsibleItem>
                <CollapsibleItem header='Second' mdi='maps-place'>
                  Lorem ipsum dolor sit amet.
                </CollapsibleItem>
                <CollapsibleItem header='Third' mdi='social-whatshot'>
                  Lorem ipsum dolor sit amet.
                </CollapsibleItem>
              </Collapsible>
            </Col>
            <h4 className='col s12'>
              Accordion
            </h4>
            <Col s={12}>
              <Collapsible accordion defaultActiveKey={1}>
                <CollapsibleItem header='First' mdi='image-filter-drama' eventKey={1}>
                  Lorem ipsum dolor sit amet.
                </CollapsibleItem>
                <CollapsibleItem header='Second' mdi='maps-place' eventKey={2}>
                  Lorem ipsum dolor sit amet.
                </CollapsibleItem>
                <CollapsibleItem header='Third' mdi='social-whatshot' eventKey={3}>
                  Lorem ipsum dolor sit amet.
                </CollapsibleItem>
              </Collapsible>
            </Col>
            <h4 className='col s12'>
              Dropdown
            </h4>
            <Col s={12}>
            </Col>
          </div>
        </Col>
        <Col m={3}>
          <ul className='section table-of-contents'>
            <li><a href='#'>Button</a></li>
            <li><a href='#'>Navbar</a></li>
            <li><a href='#'>Card</a></li>
            <li><a href='#'>Preloader</a></li>
            <li><a href='#'>Toast</a></li>
            <li><a href='#'>Modal</a></li>
            <li><a href='#'>Collapsible</a></li>
          </ul>
        </Col>
      </Row>
    );
  }
});

module.exports = ComponentsPage;
