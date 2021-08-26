import React from "react"
import SingleBook from "./SingleBook"
import { Col, Container, Form, Row } from "react-bootstrap"

class BookList extends React.Component {

    state = {
        searchQuery: '',
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Search here"
                                value={this.state.searchQuery}
                                onChange={e => this.setState({searchQuery: e.target.value})}
                            />
                        </Form.Group>

                    </Col>
                </Row>
                <Row>
                    {
                        this.props.books.filter(book => 
                            book.title.toLowerCase().includes(this.state.searchQuery)).map(book => (
                            <Col xs={3}>
                                <SingleBook book={book} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        )
    }
}

export default BookList