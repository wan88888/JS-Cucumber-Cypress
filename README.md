# JavaScript + Cucumber + Cypress 自动化测试框架

这是一个基于JavaScript、Cypress和Cucumber构建的Web自动化测试框架。它使用页面对象模型(POM)设计模式，提高了代码的可维护性和可读性。

## 功能特性

- Cypress进行Web自动化测试
- Cucumber进行BDD测试
- 页面对象模型(POM)设计模式
- 示例测试：[The Internet](http://the-internet.herokuapp.com/login)应用的登录功能
- 美观的HTML测试报告
- 环境变量配置
- 丰富的自定义命令
- 代码规范检查
- 支持并行测试执行

## 环境要求

- Node.js (v14或更高版本)
- npm (v6或更高版本)

## 安装

1. 克隆此仓库
2. 安装依赖:

```bash
npm install
```

## 项目结构

```
├── cypress
│   ├── e2e
│   │   ├── features             # Cucumber特性文件
│   │   └── step_definitions     # 步骤定义文件
│   ├── fixtures                 # 测试数据
│   ├── pages                    # 页面对象类
│   ├── reports                  # 测试报告
│   └── support                  # 支持文件
├── cypress.config.js            # Cypress配置
├── cypress.cucumber.js          # Cucumber配置
├── cypress.env.json             # 环境变量配置
├── .eslintrc.json               # ESLint配置
├── package.json                 # 项目依赖
└── README.md                    # 项目文档
```

## 运行测试

### 打开Cypress测试运行器

```bash
npm run cypress:open
```

### 在无头模式运行测试

```bash
npm test
```

### 在Chrome浏览器中运行测试

```bash
npm run test:chrome
```

### 在Firefox浏览器中运行测试

```bash
npm run test:firefox
```

### 带重试机制运行测试

```bash
npm run test:retry
```

### 生成测试报告

```bash
npm run test:report
```

### 代码规范检查

```bash
npm run lint
```

### 自动修复代码规范问题

```bash
npm run lint:fix
```

## 示例功能

项目包含了一个登录功能的示例，演示了如何：

- 导航到登录页面
- 输入凭据
- 提交表单
- 验证登录成功

## 页面对象模型

框架使用页面对象模型(POM)设计模式：

- `BasePage.js` - 包含通用方法的基类
- `LoginPage.js` - 登录页面特有的方法和元素
- `SecureAreaPage.js` - 安全区域页面特有的方法和元素

## 自定义命令

框架包含多个自定义Cypress命令：

- `login()` - 快速登录
- `waitForPageToLoad()` - 等待页面加载完成
- `getRandomString()` - 生成随机字符串
- `getByText()` - 按文本内容查找元素
- `clearBrowserData()` - 清除浏览器数据
- `logConsoleErrors()` - 捕获控制台错误
- `checkNoConsoleErrors()` - 检查页面是否有控制台错误
- `waitForApi()` - 等待API请求完成

## 环境变量配置

您可以在`cypress.env.json`文件中配置测试环境变量，包括：

- 基础URL
- 测试用户凭据
- 超时设置

## 添加新测试

1. 在`cypress/e2e/features/`中创建新的特性文件
2. 在`cypress/e2e/step_definitions/`中创建步骤定义
3. 根据需要在`cypress/pages/`中创建页面对象 