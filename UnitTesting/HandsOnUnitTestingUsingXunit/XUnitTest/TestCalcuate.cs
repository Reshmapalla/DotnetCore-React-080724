using System;
using Xunit;
using CalculateService;
using System.Collections.Generic;

namespace XUnitTest
{
    public class TestCalcuate
    {
      // Test cases
        
        [Fact]
        public void TestAdd()
        {
           
            //Arrange
            Calculate obj = new Calculate();
            int expected = 3;
            //Act
            int actual = obj.Add(1, 4);
            
            //Assessrt
            Assert.Equal(expected, actual);

        }
        [Fact]
        public void TestDiv()
        {
            Calculate obj = new Calculate();
            int actual = obj.Div(10,2);
            Assert.Equal(12,actual);
            
        }
        [Fact]
        public void TestGetNo()
        {
            //Act
            Calculate obj = new Calculate();
            List<int> list = obj.GetNos();
            Assert.NotNull(list);
            Assert.Equal(4, list.Count);
           
        }
        [Fact]
        public void TestSquare()
        {
            //Arrange
            double expected = 81;
            //Act
            double actual = Maths.Square(9);
            Assert.Equal(expected, actual);
        }
    }
}
