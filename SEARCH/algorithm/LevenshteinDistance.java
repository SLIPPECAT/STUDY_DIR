public class LevenshteinDistance {

    // 동적 프로그래밍을 이용한 레벤슈타인 거리
    private int getDistance(String s1, String s2){
        int len1 = s1.length();
        int len2 = s2.length();

        int[][] dp = new int[len1+1][len2+1];

        for (int i = 0; i <= len1; i++) {
            for (int j = 0; j <= len2; j++) {
                dp[i][0] = i;
                dp[0][j] = j;
            }
        }

        for (int i = 1; i <= len1; i++) {
            for (int j = 1; j <= len2; j++) {
                if (s1.charAt(i-1) == s2.charAt(j-1)){
                    dp[i][j] = dp[i-1][j-1];
                } else {
                    dp[i][j] = Math.min(dp[i-1][j-1], Math.min(dp[i-1][j], dp[i][j-1])) + 1;
                }
            }
        }
        return dp[len1][len2];
    }

    // 편집 거리 정규화
    private double getDistance(char[] s, char[] t){
        int m = s.length;
        int n = t.length;

        // 거리 행렬 할당
        int [][] d = new int[m+1][n+1];

        // 거리에 대한 상한값을 초기화한다.
        for (int i = 0; i <= m; i++) {
            d[i][0] = i;
        }
        for (int j = 0; j <= n ; j++) {
            d[0][j] = j;
        }
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // 비용은 이전 일치와 같다.
                if(s[i-1] == t[j-1]){
                    d[i][j] = d[j-1][j-1];
                } else {
                    d[i][j] = Math.min(Math.min(
                            d[i-1][j] + 1,
                            d[i][j-1] + 1)
                            , d[i-1][j-1] + 1);
                }

            }
        }

        int distance = d[m][n];
        int normLength = Math.max(m, n);

        return (double) (normLength - distance) / normLength;
    }

    // 다메로 레벤슈타인(Damerau-Levenshtein) 거리
    // 인접 문자의 치환데 대한 추가적인 연산 허용

    public static void main(String[] args) {
        String s1 = "book";
        String s2 = "boom";
        LevenshteinDistance led = new LevenshteinDistance();
        int distance = led.getDistance(s1, s2);
        double distance2 = led.getDistance(s1.toCharArray(), s2.toCharArray());
        System.out.println("distance = " + distance);  // 1
        System.out.println("distance2 = " + distance2);  // 0.75
    }
}
