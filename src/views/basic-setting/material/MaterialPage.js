// will-win 
import * as React from 'react';

// material-ui
import {
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from '@mui/material';

// project imports
import MainCard from '../../../ui-component/MainCard';
import { useSelector } from '../../../store/index';

// assets
import FilterListIcon from '@mui/icons-material/FilterListTwoTone';
import PrintIcon from '@mui/icons-material/PrintTwoTone';
import FileCopyIcon from '@mui/icons-material/FileCopyTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import MaterialList from './MaterialList';
import FormDialog from './MaterialDialog';

// ==============================|| Material LIST ||============================== //

const MaterialPage = () =>  {
    const [search, setSearch] = React.useState('');
    const [rows, setRows] = React.useState([]);
    const [filter, setFilter] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const { materialList } = useSelector((state) => state.basicSetup.material);

    React.useEffect(() => {
        setRows(materialList);
        setFilter(materialList);
    }, [materialList]);

    const handleSearch = (event) => {
        const newString = event?.target.value;
        setSearch(newString || '');

        if (newString) {
            const newRows = filter.filter((row) => {
                let matches = true;

                const properties = [ 'id','name', 'comment'];
                let containsQuery = false;

                properties.forEach((property) => {
                    if (row[property].toString().toLowerCase().includes(newString.toString().toLowerCase())) {
                        containsQuery = true;
                    }
                });

                if (!containsQuery) {
                    matches = false;
                }

                return matches;
            });
            setRows(newRows);
        } else {
            setRows(materialList);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <MainCard>
        <CardContent>
        <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }}
                            onChange={handleSearch}
                            placeholder="Search Order"
                            value={search}
                            size="small"
                        />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
                        <Tooltip title="Copy">
                            <IconButton size="large">
                                <FileCopyIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Print">
                            <IconButton size="large">
                                <PrintIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Filter">
                            <IconButton size="large">
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
        </Grid>
        </CardContent>
        <MaterialList rows={rows} setOpen={setOpen}></MaterialList>
        <FormDialog open={open} onClose={handleClose}></FormDialog>
    </MainCard>                        
  );
}

export default MaterialPage;