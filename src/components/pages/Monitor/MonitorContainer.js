import {Box, Container} from "@mui/material";
import Search from "../../common/Search";
import * as React from "react";

const Monitor = () => {
  return (
      <Container>
          <Box
              sx={{
                  padding:'20px 20px',
                  backgroundColor:'#fff',
                  borderRadius: '6px'
              }}
          >
              <Search/>
              <div>Monitor</div>
          </Box>
      </Container>
  )
};

export default Monitor;