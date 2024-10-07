const decodeTheRing = function (s, p) {

    // write your code here
function numIslands(grid){

if(grid.length===0||
   grid[0].length===0)return 0;
  
  const rows =grid.length;
  const cols =grid[0].length;
  let islandCount =0;
  function dfs(grid,i,j){
if(i<0||j<0||i>=rows
   || j>=cols||grid[i][j]==='w')
{
return;
  }
grid[i][j]='w';
    dfs(grid,i-1,j);
        dfs(grid,i+1,j);
        dfs(grid,i,j-1);
        dfs(grid,i,j+1);
  }
  for(let i=0;i<rows;i++){
     for(let j=0;j<cols;j++){
       if(grid[i][j]==='L'){
         islandCount++;
         dfs(grid,1,j);
  }
}
}
  return islandCount;
}

  };
  
  module.exports = decodeTheRing;
