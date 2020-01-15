import React from "react";
import {makeStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";

const sameText = {
    //display: "inline"
    fontSize: "13px",
    fontWeight:"700"
}

const useStyles = makeStyles(theme => ({
    contenedor: {
        backgroundColor:"white",
        '&:hover': {
            backgroundColor: "#eaeaea",
            cursor: "pointer"
        },
    },
    textTitle: {
        margin: 0,
        color: "#333",
        ...sameText
    },
    textAuthor: {
        margin: 0,
        ...sameText,
        color: "#999"
    },
    textDate: {
        margin: 0,
        color: "#333",
        ...sameText
    }
}));


const eliminar = (id) => {
    fetch("http://localhost:3001/news/delete/"+id,{method:"DELETE"})
        .then(d => d.json()
            .then(d => {
                window.location.reload();
                console.log(d);
            }));
    /*this.setState({i: this.state.i + 1});*/

}

export default function Row(props) {

    const clases = useStyles()


    return (

        <Container className={clases.contenedor}  style={{"display":"inline-block" ,"borderBottom":"1px #ccc solid"}}>
            <Grid container spacing={2} justify="center"  >

                <Grid onClick={() => window.open(props.data.story_url, "_blank")}  container item alignItems={'center'} xs={11}>
                    <Grid item xs={5}>
                        <p className={clases.textTitle}>{props.data.story_title || props.data.title}</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p className={clases.textAuthor}>- {props.data.author} - </p>

                    </Grid>
                    <Grid container justify="flex-end" item xs={4}>
                        <p className={clases.textDate}>{props.data.created_at}</p>

                    </Grid>
                </Grid>


                <Grid item xs={1} container justify="flex-end">
                    <IconButton onClick={() => window.confirm(`Estas seguro de eliminar el titulo "${props.data.story_title || props.data.title}"`) ? eliminar(props.data.objectID):false} edge="end" aria-label="delete">
                        <DeleteIcon/>
                    </IconButton>
                </Grid>
            </Grid>

        </Container>

    )

}


