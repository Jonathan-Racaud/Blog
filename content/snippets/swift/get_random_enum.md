---
title: "Swift - Get random enum"
ProgLang: Swift
publishdate: 30 Jan 2022
---
## Function definition
```swift
func getRandomEnum<T>() -> T? where T: RawRepresentable & CaseIterable && T.RawValue == Int {
    let max = Int(T.self.allCases.count)
    let value = Int.random(in: 0...max)

    return T(rawValue: value)
}
```

## Usage
```swift
let country: Countries = getRandomEnum() ?? .france
let language: Languages = getRandomEnum() ?? .french
```

## Pre-requesite
This function will only work for enum that are defined like this:
```swift
enum Countries: Int, CaseIterable {
    case france = 0
    case unitedKingdom
    case china
    case japan
}
```

## Explanation
The function relies on Swift's generics and type infering to be able to get the correct random enum.

Here's how to understand the function declaration. I've put it on multiple line for easier reading here:
{{< code numbered="true" language="swift" >}}
func getRandomEnum[[[<T>]]]() -> [[[T?]]] 
    [[[where T:]]] [[[RawRepresentable & CaseIterable]]] 
    [[[&& T.RawValue == Int]]] {}
{{< /code >}}

1. We specify that it takes a generic type of T
2. Because of the call to ``T(rawValue: Int)`` that returns a T? we also return that. 
It is not possible to know what value we should return in case of failure so we keep as well the nullable type.
3. Start of the generic constraints.
4. Constraints on the type T. ``RawRepresentable`` because the enum inherits from ``Int`` and ``CaseIterable`` because we need the ``allCases`` property.
5. Here we say that we are only interested in enums for which the underlying type is an ``Int``.