# Chapter 02 - 실행 컨텍스트

### [02] Variable Environment

- 실행 컨텍스트를 생성할 때 VariableEnvironment에 정보를 먼저 담은 다음, 이를 그대로 복사해서 LexicalEnvironment를 만들고, 이후에는 LexicalEnvironment를 주로 활용
- VariableEnvironment와 LexicalEnvironment의 내부는 environmentRecord와 outerEnvironmentReference로 구성돼있음
