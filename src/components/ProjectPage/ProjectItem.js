import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Chip from '@material-ui/core/Chip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './ProjectItem.css';


const styles = theme => ({
    card: {
        // height: 550,
        backgroundColor: 'rgba(51, 171, 159, 0.323)',
    },
    media: {
        height: 0,
        paddingTop: '67.25%', // 16:9,
        // backgroundColor: 'rgba(51, 171, 159, 0.323)'
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(0deg)',
    },
    avatar: {
        backgroundColor: '#33ab9f',
    },
});




class ProjectItem extends Component {

    state = {
        expanded: false,
        toggle: false,
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    formatDate = () => {
        const date = this.props.project.date_completed;
        return new Date(date).getMonth() + 1 + '/' +
            new Date(date).getDate() + '/' +
            new Date(date).getFullYear()
    }

    toggleHeart = () => {
        if (!this.state.toggle) {
            this.setState({
                toggle: true,
            })
        } else {
            this.setState({
                toggle: false,
            })
        }
    }

    displayHeart = () => {
        if (this.state.toggle) {
            return <FavoriteIcon style={{ color: '#c95f76' }} />
        }
        else {
            return <FavoriteIcon />
        }
    }


    render() {
        const { classes } = this.props;

        return (
            <Grid item xs={12} sm={4}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="initials" className={classes.avatar}>
                                GH
                                </Avatar>
                        }
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={this.props.project.name}
                        subheader={this.formatDate()}
                    />
                    <div className="card-image">
                        <CardMedia
                            style={{ height: '60px' }}
                            className={classes.media}
                            image={this.props.project.thumbnail}
                            title={this.props.project.name}
                        />
                    </div>
                    <CardContent style={{ marginTop: '3px', marginBottom: '3px', height: '90px' }}>
                        <Typography component="p">
                            {this.props.project.description}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites" onClick={this.toggleHeart}>
                            {this.displayHeart()}
                        </IconButton>
                        <IconButton aria-label="github" >
                            <a href={!this.props.project.github ? "https://github.com" : this.props.project.github}
                                target="_blank">
                                <i class="fab fa-github fa-lg"></i>
                            </a>
                        </IconButton>
                        <Typography style={{ marginRight: '8px', marginLeft: '4px' }}>tags: </Typography>
                        <Chip label={this.props.project.tag_name} className={classes.chip} variant="outlined" />
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>

                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                minutes.
                                    </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
        );
    }
}

ProjectItem.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ProjectItem);