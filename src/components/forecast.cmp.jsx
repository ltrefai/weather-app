import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

function ForecastTile( props ) {
    const { icon, date, caption, temp } = props.info;
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                    {date}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    image={icon}
                    title="weather icon"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {caption}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    High: {temp?.high} <br/>
                    Low: {temp?.low}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ForecastTile;