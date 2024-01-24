## 예제1
### 드라이버 설정, 구글에 '유튜브' 검색 (브라우저 켜짐)

```Java
    @Test
    void test(){
        System.setProperty("webdriver.chrome.driver", "/Users/ryujun-yeong/Documents/projects/common/lib/chromedriver_mac_arm64_116/chromedriver");

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

        driver.get("https://www.google.com/");

        driver.findElement(By.name("q")).sendKeys("YouTube");;

        WebElement searchIcon = driver.findElement(By.name("btnK"));
        searchIcon.click();
    }
```

1. 드라이버의 종류와 경로 설정
2. 크롬드라이버 생성
3. 브라우저 창 크기 최대화
4. 타임아웃 (정확한 설명을 못하겠습니다...)
5. url 입력
6. 구글에서 'q'와 'btnK'는 각각 검색창과 입력 버튼을 나타내며
7. 먼저'YouTube' 검색어를 입력하고, 입력 버튼을 누른다.
8. 크롬 브라우저가 실행되며, 유튜브 검색어가 입력되고 검색이 된다.

### 드라이버 설정, 구글에 '유튜브' 검색 (브라우저 꺼짐)
- 브라우저를 켜지 않고도 실행할 수 있는데, 크롬 옵션에 헤드리스를 추가해주면 된다.
- headless 옵션을 만들어 놓고, ChromeDriver를 생성할 때에 이 옵션을 넣어주면 된다.
```Java
    @Test
    void test(){
        System.setProperty("webdriver.chrome.driver", "/Users/ryujun-yeong/Documents/projects/common/lib/chromedriver_mac_arm64_116/chromedriver");

        ChromeOptions options = new ChromeOptions();
        options.addArguments("headless");
        driver = new ChromeDriver(options);

        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

        driver.get("https://www.google.com/");

        driver.findElement(By.name("q")).sendKeys("YouTube");;

        WebElement searchIcon = driver.findElement(By.name("btnK"));
        searchIcon.click();
    }
```
