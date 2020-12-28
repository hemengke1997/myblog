---
title: 前端配置 SonarScanner 和 SonarLint 
id: SonarScanner
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## 1. 下载`SonarScanner`


[下载地址](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/)。选择对应的系统版本下载。

## 2. 安装解压


- 安装解压之后，根目录（后文称这个目录为`$install_dir`）中有个 `/conf/sonar-scanner.properties`， 打开这个文件
- 修改 `sonar-scanner.properties` 文件，修改之后如下所示：
```properties
#Configure here general information about the environment, such as SonarQube server connection details for example
#No information about specific project should appear here

#----- Default SonarQube server
# 可以是本地localhost 也可以是服务器地址， 如： localhost:9000
sonar.host.url=http://121.41.11.11:9000

#----- Default source code encoding
sonar.sourceEncoding=UTF-8

# 如果连接远程服务，需要身份验证
sonar.login= <用户名>

sonar.password = <密码>
```

- 配置环境变量，将 `$install_dir/bin` 添加到path中


<img src={useBaseUrl('img/SonarScanner1.png')} />


- 打开cmd， 输入 `sonar-scanner -h` ，如果出现下图，说明配置成功。

<img src={useBaseUrl('img/SonarScanner2.png')} />


## 3. 在项目中使用sonar-scanner


- 在需代码检查的项目的根路径下，创建 `sonar-project.properties` 配置文件，内容如下：
```properties
# must be unique in a given SonarQube instance
# 你的项目名称
sonar.projectKey=abcde

# --- optional properties ---

# defaults to project key
# 你的项目名称，一般跟projectKey对应
sonar.projectName=abcde

# defaults to 'not provided'
#sonar.projectVersion=1.0
 
# Path is relative to the sonar-project.properties file. Defaults to .
# 检查的代码路径
sonar.sources=./src  
 
# Encoding of the source code. Default is default system encoding
sonar.sourceEncoding=UTF-8
```

- 在项目路径下打开 `CMD` (不能用git bush)，输入 `sonar-scanner`。完事。



## 4. 配置`SonarLint`插件


- 必要环境： `JRE8` 或 `JRE11` ， `NODEJS`
- 额外插件： `Language support for Java`
- 配置步骤
   - 在VS Code中打开setting， 配置 `JRE` 路径
```json
"sonarlint.ls.javaHome": "C:\\Program Files\\Java\\jre1.8.0_201",
```

   - 连接 `SonarQube` 远程服务
```json
"sonarlint.connectedMode.connections.sonarqube": [{
    "connectionId": "abcde",
    "serverUrl": "https://121.41.11.11:9000",
    "token": "6a19b85b095abcde0ae70702e31ef27c5a0f7b"
}]
```

   - 其中 `token` 是在 `SonarQube` 项目中的“账户=》安全”中获得的
   - 在前端项目的根目录中创建 `.vscode=>setting.json` ，输入类似下面的代码
```json
{
  "sonarlint.connectedMode.project": {
    "connectionId": "abcde",
    "projectKey": "abcde"
  }
}
```

   - 配置完成
