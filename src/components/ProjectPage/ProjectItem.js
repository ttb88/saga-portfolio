import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import './ProjectItem.css';

// potential future use
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Collapse from '@material-ui/core/Collapse';


const styles = theme => ({
    card: {
        backgroundColor: 'rgba(51, 171, 159, 0.323)',
    },
    media: {
        height: 0,
        paddingTop: '67.25%',
    },
    actions: {
        display: 'flex',
    },
    typography: {
        useNextVariants: true,
    },
    // for potential future usage
    // expand: {
    //     transform: 'rotate(0deg)',
    //     marginLeft: 'auto',
    //     transition: theme.transitions.create('transform', {
    //         duration: theme.transitions.duration.shortest,
    //     }),
    // },
    // expandOpen: {
    //     transform: 'rotate(0deg)',
    // },
    avatar: {
        backgroundColor: '#33ab9f',
    },
});




class ProjectItem extends Component {

    state = {
        expanded: false,
        heartToggle: false,
    };

    // for potential future use    
    // handleExpandClick = () => {
    //     this.setState(state => ({ expanded: !state.expanded }));
    // };

    // formats date on card
    formatDate = () => {
        const date = this.props.project.date_completed;
        return new Date(date).getMonth() + 1 + '/' +
            new Date(date).getDate() + '/' +
            new Date(date).getFullYear()
    }

    // toggles state of heart button icon when clicked and determines which version of icon is displayed on DOM     
    toggleHeart = () => {
        if (!this.state.heartToggle) {
            this.setState({
                heartToggle: true,
            })
        } else {
            this.setState({
                heartToggle: false,
            })
        }
    }

    // outputs version of heart icon to DOM based on current state of 'heartToggle'
    displayHeart = () => {
        if (this.state.heartToggle) {
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
                            <Avatar style={{ marginRight: '-49px' }} aria-label="initials" className={classes.avatar} src="/images/44652804.jpeg">
                                </Avatar>
                        }
                        // for potential future use
                        // action={
                        //     <IconButton>
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title={this.props.project.name}
                        subheader={!this.props.project.date_completed ? '' : this.formatDate()}
                    />
                    <div className="card-image">
                        <CardMedia
                            style={{ height: '60px' }}
                            className={classes.media}
                            image={this.props.project.thumbnail ? this.props.project.thumbnail : "images/clement-h-544786-unsplash.jpg"}
                            title={this.props.project.name}
                        />
                    </div>
                    {this.props.project.description && <CardContent style={{ marginTop: '3px', marginBottom: '3px', height: '90px' }}>
                        <Typography component="p">
                            {this.props.project.description}
                        </Typography>
                    </CardContent>}
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites" onClick={this.toggleHeart}>
                            {this.displayHeart()}
                        </IconButton>
                        <IconButton aria-label="github" >
                            <a href={!this.props.project.github ? "https://github.com" : this.props.project.github}
                                target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github fa-lg"></i>
                            </a>
                        </IconButton>
                        {this.props.project.website && <IconButton aria-label="website" >
                            <a href={this.props.project.website}
                                target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-globe-americas fa-lg"></i>
                            </a>
                        </IconButton>}
                        {this.props.project.tag_name && <><Typography style={{ marginRight: '8px', marginLeft: '4px' }}>tags: </Typography>
                        <Chip label={this.props.project.tag_name} className={classes.chip} variant="outlined" /></>}
                        {/* 
                            // for potential future use
                            <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton> */}

                    </CardActions>
                    {/* 
                        // for potential future use
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>TBD</Typography>
                            <Typography paragraph>
            
                                    </Typography>
                            <Typography paragraph>
                
                                    </Typography>
                        </CardContent>
                    </Collapse> */}
                </Card>
            </Grid>
        );
    }
}


export default withStyles(styles)(ProjectItem);