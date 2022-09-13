using Xunit;
using FluentAssertions;
using teste_types;

namespace variable.Test;

public class UnitTest1
{
    /* [Fact]
    public void TestVariableCreation()
    {
        Class1 instance = new();

        var response = instance.someString is string;
        response.Should().Be(true);
    } */
    [Fact]
    public void TestVariableTransform()
    {
        // Meu código
        /* Class1 instance = new();

        var response = instance.intEntry is int;

        instance.Transform();
        response.Should().Be(true);

        var dou = instance.doubleResponse is double;
        dou.Should().Be(true); */

        // Código course
        Class1 instance = new();

        instance.intEntry.Should().Be(42);
        var intTypeCheck = instance.intEntry is int;
        intTypeCheck.Should().Be(true);

        instance.Transform();

        instance.doubleResponse.Should().Be(42.0);
        var floatTypeCheck = instance.doubleResponse is double;
        floatTypeCheck.Should().Be(true);
    }

    [Fact]
    public void TestVariableConversion()
    {
        Class2 instance = new();

        instance.strEntry.Should().Be("42");
        var strTypeCheck = instance.strEntry is string;
        strTypeCheck.Should().Be(true);

        instance.DoConversion();

        instance.intResponse.Should().Be(42);
        var intTypeCheck = instance.intResponse is int;
        intTypeCheck.Should().Be(true);
    }
}