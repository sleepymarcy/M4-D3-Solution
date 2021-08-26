import React from "react"
import { Card } from "react-bootstrap"

class SingleBook extends React.Component {
    
    state = {
        selected: false
    }
    
    render() {
        return (
            <Card 
                onClick={() => this.setState({ selected: !this.state.selected })}
                style={{border: this.state.selected ? '3px solid green' : 'none'}}    
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}
    

export default SingleBook

// export default ({book}) => (
//     <Card>
//         <Card.Img variant="top" src={book.img} />
//         <Card.Body>
//             <Card.Title>{book.title}</Card.Title>
//         </Card.Body>
//     </Card>
// )

// function SingleBook({book}){
//     return (
//         <Card>
//             <Card.Img variant="top" src={book.img} />
//             <Card.Body>
//                 <Card.Title>{book.title}</Card.Title>
//             </Card.Body>
//         </Card>
//     )
// }

// export default SingleBook