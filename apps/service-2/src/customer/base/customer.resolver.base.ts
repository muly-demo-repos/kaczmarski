/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { Public } from "../../decorators/public.decorator";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Customer } from "./Customer";
import { CustomerCountArgs } from "./CustomerCountArgs";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerFindUniqueArgs } from "./CustomerFindUniqueArgs";
import { CreateCustomerArgs } from "./CreateCustomerArgs";
import { UpdateCustomerArgs } from "./UpdateCustomerArgs";
import { DeleteCustomerArgs } from "./DeleteCustomerArgs";
import { Order } from "../../order/base/Order";
import { CustomerService } from "../customer.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Customer)
export class CustomerResolverBase {
  constructor(
    protected readonly service: CustomerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _customersMeta(
    @graphql.Args() args: CustomerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @Public()
  @graphql.Query(() => [Customer])
  async customers(
    @graphql.Args() args: CustomerFindManyArgs
  ): Promise<Customer[]> {
    return this.service.customers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Customer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "own",
  })
  async customer(
    @graphql.Args() args: CustomerFindUniqueArgs
  ): Promise<Customer | null> {
    const result = await this.service.customer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Customer)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "create",
    possession: "any",
  })
  async createCustomer(
    @graphql.Args() args: CreateCustomerArgs
  ): Promise<Customer> {
    return await this.service.createCustomer({
      ...args,
      data: {
        ...args.data,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Customer)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateCustomer(
    @graphql.Args() args: UpdateCustomerArgs
  ): Promise<Customer | null> {
    try {
      return await this.service.updateCustomer({
        ...args,
        data: {
          ...args.data,

          order: args.data.order
            ? {
                connect: args.data.order,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Customer)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "delete",
    possession: "any",
  })
  async deleteCustomer(
    @graphql.Args() args: DeleteCustomerArgs
  ): Promise<Customer | null> {
    try {
      return await this.service.deleteCustomer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Order, {
    nullable: true,
    name: "order",
  })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async getOrder(@graphql.Parent() parent: Customer): Promise<Order | null> {
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
