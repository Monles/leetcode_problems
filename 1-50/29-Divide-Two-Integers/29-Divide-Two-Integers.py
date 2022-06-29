class Solution:
    def div(self, dividend: int, divisor: int) -> int:
        """Assumes quotient is in-bounds, and divisor and dividend are both negative."""
        quotient = 0
        while dividend <= divisor:
            power = 0
            while divisor << (power + 1) > dividend:
                power += 1
            dividend -= divisor << power
            quotient += 1 << power

        return quotient

    def divide(self, dividend: int, divisor: int) -> int:
        # Handle out-of bounds result
        if dividend == -2**31 and divisor == -1:
            return 2**31 - 1

        # Convert both numbers to negative, remembering if the signs were different
        negative = False
        if dividend > 0 and divisor > 0:
            dividend = -dividend
            divisor = -divisor
        elif dividend > 0:
            dividend = -dividend
            negative = True
        elif divisor > 0:
            divisor = -divisor
            negative = True

        if negative:
            return -self.div(dividend, divisor)
        else:
            return self.div(dividend, divisor)
