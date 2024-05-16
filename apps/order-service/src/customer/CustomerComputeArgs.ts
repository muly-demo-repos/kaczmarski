import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class CustomerComputeArgs {
    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    multiplier!: number;

    @Field(() => Boolean)
    @ApiProperty({
        required: true,
        type: () => Boolean
    })
    @Type(() => Boolean)
    useExtendedCalculation!: boolean;
}

export { CustomerComputeArgs as CustomerComputeArgs };