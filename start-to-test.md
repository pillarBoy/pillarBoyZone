


### 第一课预习笔记

##### npm & nodejs  

  ```
  记得两三年前，我还是个小白的时候，我不懂什么是npm，也分不清楚nodejs与npm的区别，
  趁这个机会写一下自己的一些理解。
  ```

- npm 是一个什么东西？它能干什么？我什么情况下要用这个东西？它怎么使用？  

  ```
  npm其实就是一个包的管理工具。这句话的前提是，什么叫包，你要理解。反正我当时不知道，
  使用过就是跟着别人的教程做了几个demo之后才明白，包就是 [node_modules] 这个文件里面的
  东西。也可以理解为插件、库这一类东西。以前，我们使用jquery的时候，要去一些网站下载那个js文，
  使用了npm，就不用去百度搜索jquery然后打开那个网站找到下载按钮，点击下载，
  然后复制到自己的开发文件夹了。
  只要在开发文件夹执行  [npm install jquery] 这行命令，npm就会帮你下载到[node_modules/jquery]这个目录下了。
  这就是npm。   
  那它怎么使用呢？
  首先，当然是安装它。它的安装方法也特别简单，百度 [nodejs官网] 去下载一个nodejs，
  安装到你的电脑，安装完成后，打开命令面板，执行一下命令  npm -v 显示类似 5.6.0 这种版
  本就说明安装成功了。不要问为什么明明是安装npm 怎么去百度搜索 nodejs官网，直接跟着操作就对。
  原因说一下，不知道从哪个版本开始，nodejs的安装，已经只带帮你把npm安装好了，非常方便。
  ```

- node 又是一个什么东西？

  ```
  讲node之前要提一个问题，javascript 代码是怎么执行起来的，或者说，js代码是在什么环境下运作的，
  js的执行环境是什么？
  这个问题是我在理解什么是nodejs是什么东西对自己提出的一个疑问。查了很多资料后，我才懂。
  以前，还没有nodejs的时候，js的脚本引擎我们大多数都会想到浏览器。
  因为Google Chrome浏览器内置的JavaScript脚本引擎，V8引擎.
  只要理解了这一点，我认为就比较容易理解什么是nodejs了。
  nodejs内置了V8引擎，它可以理解为运行在服务器的浏览器(当然这句话非常不对，只能类比理解一下)。
  它除了能执行我们平时写的前端js代码外，还提供了很多操作文件，操作数据库，http服务等的API，但是运行在nodejs的环境里，没有全局的window、document、navigator等这些只有浏览器才有的全局变量。
  这就是node。
  ```  

##### 代码测试初探

  - 对TDD & BDD
    - TDD
    ```
    TDD (test driven development) 翻译就是 测试驱动开发，是一种使用自动化单元测试来推动软件设计并
    强制依赖关系解耦的技术(这句话是网上抄来的)
    个人理解就是，在开发写真正的业务代码之前，先编写好实现功能的测试，然后再去写业务代码。业务代码出
    来后，就去跑测试，看看测试是否能通过，不通过就改业务代码，直到业务代码跑通。
    ```

    - BDD
    ````
    BDD (Behavior Driven Development) 翻译为 行为驱动开发。
    行为驱动的开发人员使用他们的母语与领域驱动设计的语言相结合来描述他们的代码的目的和好处。(这句话
      也是网上找到的，不太理解这句话)
    我的理解是：BDD 主要是测试代码是否符合产品或者客户的需求，也就是代码的功能测试。
    ````
    [参考 Leo_wlCnBlogs 博客](https://www.cnblogs.com/Leo_wl/p/4780678.html)

  - node assert

  ```
  node assert 这是一个断然模块.
  由于本人也还不是很熟悉，挑几个方法讲讲它的用法和自己的理解。
  ```

  [参考于Node.js 中文网](http://nodejs.cn/api/assert.html)

    - assert ()

      ```js
        // assert(value[, message])
        const assert = require('assert');
        // 简单的加法
        function add(a, b) {
            return a + b
        }
        assert(add(1,2)===2, '检验没通过')
        执行会返回一个 AssertionError 里面会包含 '检验没通过' 信息

        assert(add(1,2)===3, '检验没通过')
        // 这里没有任何输出
      ```

    - assert.deepEqual(actual, expected[, message])

      测试 actual 参数和 expected 参数之间的深度相等。 深度相等意
      味着子对象的可枚举的自身属性也通过以下规则进行递归计算。
      简单来说就是，测试actual、expected 两个参数是否相等，不管这两个参数说数字，字符串，数组还是对象，都能用这个方法去判断。

      ```js
      var assert = require('assert')
      /* number */
      assert.deepEqual(1, 2, '两个参数不相等哦')
      // 返回 AssertionError 里面包含了 '两个参数不相等哦' 错误
      /* object */
      var one = {a:1, b:2}
      var two = {a:1, b:"2"}
      assert.deepEqual(one, two, '两个对象不相等')
      // 返回 AssertionError 里面包含了 '两个对象不相等' 错误
      /* array */
      var one = ['1', 2]
      var two = [1, 2]
      assert.deepEqual(one, two, '两个数组不相等')
      // 返回 AssertionError 里面包含了 '两个数组不相等' 错误
      ```

  - should.js & mocha  
  初步了解了一下 mocha 是一套测试框架，而should.js是一个断言库

    - mocha
      判断一数组方法 indexOf
      ```js
        // 安装 mocha 线不说，自行百度一下很多的，等我有空回来补上，先暂时不展开
        var assert = require('assert')
        describe('Array', function() {
            describe('#indexOf()', function() {
                it('如果没有这个值的时候，应该返回 -1', function() {
                    assert.equal(-1, [1, 2, 3].indexOf(4))
                })
            })
        })
      ```

      // 执行 mocha 命令 这里应该输出
      ```
      Array
        #indexOf()|
        ✓ 如果没有这个值的时候，应该返回 -1  
      ```
      ---  

      判断两个对象是否深度相等

      ```js
      describe('assert', function () {
      it('a和b应当深度相等', function () {
        var a = {
          c: {
            e: 1
          }
        }
        var b = {
          c: {
            e: "1",
            // d: 2
          }
        }
        // 修改下面代码使得满足测试描述
        // assert.equal(a, b)
        assert.deepStrictEqual(a, b, 'a和b不是深度相等')
      })
      ```
      这里执行 mocha 命令输出

      ```
      assert
        a和b应当深度相等:

      AssertionError [ERR_ASSERTION]: a和b不是深度相等
        + expected - actual

        {
          "c": {
        -    "e": 1
        +    "e": "1"
          }
        }
      ```
      上面是单纯的 mocha 的简单用法，其实挺有意思的，有点自己跟自己较劲一样，哈哈

    - should.js 断言

      环境搭建，我后面再单独写一篇说明一下，这里先介绍简单的用法

      ```js
        function add(a, b) {
          return a + b
        }
        describe('加法计算', function(){
          it('1 + 2 = 3', function() {
            add(1, 2)
              .should.equal(3)
          })
        })
      ```
      这里执行 mocha 命令后输出
      ```
      加法计算
      ✓ 1 + 2 = 3
      ```
