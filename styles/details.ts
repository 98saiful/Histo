/**
 * DetailsScreen styles
 */

import { StyleSheet } from "react-native";
import { Spacing } from "../constants/spacing";
import { Typography } from "../theme";
import { Colors } from "../constants/colors";
import { Layout } from "../constants/layout";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.surface,
    },
    image: {
        width: "100%",
        height: Layout.CARD_IMAGE_HEIGHT,
    },
    content: {
        padding: Spacing.xl,
    },
    country: {
        ...Typography.caption,
    },
    dateInscribed: {
        ...Typography.caption,
    },
    description: {
        lineHeight: Spacing.xxl,
    },
    buttonContainer: {
        marginTop: Spacing.xl,
    },
    visitCard: {
        borderColor: Colors.success,
        borderRadius: Spacing.md,
        paddingHorizontal: Spacing.sm,
        paddingVertical: Spacing.lg,
        backgroundColor: Colors.surfaceDarker,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: Spacing.md,
    },
    // Extracted styles
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconSmall: {
        width: Spacing.md, // 12
        height: Spacing.md, // 12
        tintColor: Colors.primary,
        marginRight: Spacing.xs, // 4 (was 5)
    },
    iconMedium: {
        width: 18,
        height: 18,
        tintColor: Colors.primary,
        marginRight: Spacing.sm, // 8
    },
});
