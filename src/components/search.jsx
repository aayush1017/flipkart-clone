import { Box, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`
const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`
const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
`

const SearchBar = () => {
    return (
            <SearchContainer>
            <InputSearchBase
              />
              <SearchIconWrapper>
                  <SearchIcon />
              </SearchIconWrapper>
            </SearchContainer>
    )
}

export default SearchBar;