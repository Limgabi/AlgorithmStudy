function solution(n) {
    var f = [0, 1]
    
    for(let i=2;i<=n;i++){
        f[i] = (f[i-2] + f[i-1])% 1234567
    }
    
   return f[n];
}       