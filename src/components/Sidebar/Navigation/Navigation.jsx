import React from 'react';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { movePost } from '../../../state/actions';
import AddPost from '../../Controls/AddPost';
import NavItem from './NavItem/NavItem';

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : '#69585F',

    // styles we need to apply on draggables
    ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'grey',
});

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const { dispatch } = this.props;
        dispatch(movePost(result.source.index, result.destination.index));
    }

    /* eslint "react/jsx-props-no-spreading": 0 */
    render() {
        const { posts } = this.props;
        return (
            <ul>
                <li><AddPost text="+" /></li>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(droppableProvided, droppableSnapshot) => (
                            <div
                                ref={droppableProvided.innerRef}
                                style={getListStyle(droppableSnapshot.isDraggingOver)}
                            >
                                {posts.map((post, index) => (
                                    <Draggable key={post.id} draggableId={post.id} index={index}>
                                        {(draggableProvided, draggableSnapshot) => (
                                            <div
                                                ref={draggableProvided.innerRef}
                                                {...draggableProvided.draggableProps}
                                                {...draggableProvided.dragHandleProps}
                                                style={getItemStyle(
                                                    draggableSnapshot.isDragging,
                                                    draggableProvided.draggableProps.style,
                                                )}
                                            >
                                                <NavItem id={post.id} title={post.title} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {droppableProvided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </ul>
        );
    }
}

export default connect()(Navigation);
