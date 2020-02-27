import React from 'react'
import {
  makeStyles,
  Grid,
  TableContainer,
  Table, 
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  withStyles,
} from '@material-ui/core'


const StyledTableCell = withStyles(theme => ({
  head: {
    fontFamily: "Cabin",
    fontWeight: "600",
    fontSize: "1.3em",
    backgroundColor: "#1e272e",
    color: theme.palette.common.white,
  },
  body: {
    fontFamily: "Cabin",
    fontWeight: "600",
    fontSize: "1em",
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#34e7e4",
    padding: "2em",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: "3em",
    fontWeight: "700",
    textAlign: "center",
    color: "#1e272e", 
    fontFamily: "antipasto_prodemibold",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    margin: "1em",
    maxHeight: "40vh"
  },
  table: {
    maxWidth: "100%"
  }
})

/** Return Card Component with style already set befor for club information display
 * 
 * @param {data} props object of data that will show in page as card with table
 */
function CardClub (props) {
  const classes = useStyles()
  console.log('props di card club', props)
  console.log(props.data.crestUrl)
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.wrapper}
    >
      <Grid item xs={12} className={classes.title}>
        {props.data.name}
      </Grid>
      <Grid item xs={12} className={classes.image}>
        <img src={`${props.data.crestUrl}`} alt="club-logo"/>
      </Grid>
      <Grid 
        container
        xs={11}
        sm={10}
        md={9}
        lg={8}
      >
      <TableContainer component={Grid}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={2} align="center">CLUB INFORMATION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">SHORT NAME</StyledTableCell>
                <StyledTableCell align="right">{props.data.shortName}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">FOUNDED</StyledTableCell>
                <StyledTableCell align="right">{props.data.founded}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">WEBSITE</StyledTableCell>
                <StyledTableCell align="right">{props.data.website}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">VENUE</StyledTableCell>
                <StyledTableCell align="right">{props.data.venue}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">ADDRESS</StyledTableCell>
                <StyledTableCell align="right">{props.data.address}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">PHONE NUMBER</StyledTableCell>
                <StyledTableCell align="right">{props.data.phone}</StyledTableCell>
              </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
      <Grid 
        container
        xs={11}
        sm={10}
        md={9}
        lg={8}
      >
      <TableContainer component={Grid}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={2} align="center">SQUAD</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">COOMING SOON</StyledTableCell>
                <StyledTableCell align="right">UNDER MAINTENANCE}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">COOMING SOON</StyledTableCell>
                <StyledTableCell align="right">UNDER MAINTENANCE}</StyledTableCell>
              </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
    </Grid>
  )
}

export default CardClub